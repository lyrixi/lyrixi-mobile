// 第三方库导入
import React, { useRef, useEffect, useState } from "react";
import {
  LocaleUtil,
  Card,
  Page,
  Result,
  Input,
  Select,
  Picker,
  Switch,
  Checkbox,
  Selector,
  DatePicker,
  Cascader,
  Location,
  Signature,
  Form,
  Toast,
} from "lyrixi-mobile";

// 公共组件导入

// 内部组件导入
import { queryData, validateData, saveData } from "./../Cache/api";
import Footer from "./../Cache/Footer";

// 样式图片等资源文件导入
const locale = LocaleUtil.locale;

// 表单编辑页面
const Edit = () => {
  // 表单
  const [form] = Form.useForm();

  // 防重复提交token
  const tokenRef = useRef("" + Date.now());
  const baseDataRef = useRef<unknown>(null);

  // 全屏提示: {status: 'empty|500', message: '', data: { baseData: {}, formData: {} }}
  const [result, setResult] = useState<unknown>(null);

  useEffect(() => {
    // 初始化数据
    loadData();

    // eslint-disable-next-line
  }, []);

  /**
   * queryData初始化数据方法
   * @return {Object} {baseData: xx, formData: xx}
   */
  async function loadData() {
    // 加载详情数据
    let data = (await queryData()) as {
      formData?: unknown;
      baseData?: unknown;
    } | null;
    setResult(data);
    baseDataRef.current = data?.baseData ?? null;

    // Initialize form with data
    if (data?.formData) {
      (form as { setFieldsValue: (v: unknown) => void }).setFieldsValue(
        data.formData,
      );
    }
  }

  // 保存
  async function handleSave() {
    // 校验表单数据
    let data = await validateData({ form });
    if (!data) return;

    // 保存表单数据
    const saveResult = (await saveData({
      baseData: baseDataRef.current,
      data,
      token: tokenRef.current,
    })) as { code?: string; message?: string };
    if (saveResult.code === "1") {
      Toast.show({
        content: String(locale("提交成功!")),
        onClose: () => {
          // 提交完成后操作: 返回等
        },
      });
    }
    // 重复请求
    else if (saveResult.code === "2") {
      Toast.show({
        content: String(saveResult.message || locale("请勿重复提交!")),
        onClose: () => {
          // 提交完成后操作: 返回等
        },
      });
    }
    // 保存出错
    else {
      // 请求出错需要重新生成token
      tokenRef.current = "" + Date.now();

      Toast.show({
        content: String(saveResult.message || locale("提交失败!")),
      });
    }
  }

  return (
    <Page>
      <Page.Main>
        <Card>
          <Form form={form} style={{ margin: "0 12px" }} virtual={true}>
            <Form.Item
              height={44}
              name="input"
              label={String(locale("Input"))}
              rules={[
                {
                  required: true,
                  message: String(locale("Input cannot be empty")),
                },
              ]}
            >
              <Input.Text
                placeholder={String(locale("Please input"))}
                maxLength={50}
              />
            </Form.Item>
            <Form.Item
              height={97}
              name="textarea"
              maxLength={150}
              label={String(locale("Textarea"))}
              extra={({ value }: { value: unknown }) => {
                const s = typeof value === "string" ? value : "";
                return (
                  <div className="lyrixi-text-right">{`${s.length} / 150`}</div>
                );
              }}
            >
              <Input.Textarea placeholder={String(locale("Please input"))} />
            </Form.Item>
            <Form.Item
              height={44}
              name="autoSize"
              label={String(locale("Auto fit"))}
            >
              <Input.AutoSize placeholder={String(locale("Please input"))} />
            </Form.Item>
            <Form.Item
              height={44}
              name="select"
              label={String(locale("Select"))}
            >
              <Select.Combo
                placeholder={String(locale("Please select"))}
                list={[
                  {
                    id: "1",
                    name: "Option1",
                  },
                  {
                    id: "2",
                    name: "Option2",
                  },
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item
              height={44}
              name="picker"
              label={String(locale("Picker"))}
            >
              <Picker.Combo
                placeholder={String(locale("Please select"))}
                list={[
                  {
                    id: "1",
                    name: "Option1",
                  },
                  {
                    id: "2",
                    name: "Option2",
                  },
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item
              height={50}
              name="switch"
              valuePropName="checked"
              label={String(locale("Switch"))}
            >
              <Switch />
            </Form.Item>
            <Form.Item
              height={74}
              name="checkbox"
              label={String(locale("Checkbox"))}
            >
              <Checkbox.Group
                placeholder={String(locale("Please select"))}
                list={[
                  {
                    id: "1",
                    name: "Option1",
                  },
                  {
                    id: "2",
                    name: "Option2",
                  },
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item height={74} name="radio" label={String(locale("Radio"))}>
              <Checkbox.Group
                multiple={false}
                placeholder={String(locale("Please select"))}
                list={[
                  {
                    id: "1",
                    name: "Option1",
                  },
                  {
                    id: "2",
                    name: "Option2",
                  },
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item
              height={102}
              name="selector"
              label={String(locale("Selector"))}
            >
              <Selector
                list={[
                  {
                    id: "1",
                    name: "Option1",
                  },
                  {
                    id: "2",
                    name: "Option2",
                  },
                  {
                    id: "3",
                    name: "Option3",
                  },
                  {
                    id: "4",
                    name: "Option4",
                  },
                ]}
                allowClear
              />
            </Form.Item>
            <Form.Item
              height={44}
              name="number"
              label={String(locale("Number"))}
            >
              <Input.Number placeholder={String(locale("Please input"))} />
            </Form.Item>
            <Form.Item
              height={48}
              name="numberBox"
              label={String(locale("Number box"))}
              rules={[
                {
                  required: true,
                  message: String(locale("Number box can not empty")),
                },
              ]}
            >
              <Input.NumberBox placeholder={String(locale("Please input"))} />
            </Form.Item>
            <Form.Item
              height={56}
              name="password"
              label={String(locale("Password"))}
              extra={({ value }: { value: unknown }) => {
                return (
                  <Input.PasswordStrength
                    value={typeof value === "string" ? value : undefined}
                    style={{ marginTop: 8 }}
                  />
                );
              }}
            >
              <Input.Password placeholder={String(locale("Please input"))} />
            </Form.Item>
            <Form.Item height={55} name="range" label={String(locale("Range"))}>
              <Input.Range />
            </Form.Item>
            <Form.Item height={55} name="rate" label={String(locale("Rate"))}>
              <Input.Rate />
            </Form.Item>
            <Form.Item height={44} name="tel" label={String(locale("Tel"))}>
              <Input.Tel placeholder={String(locale("Please input"))} />
            </Form.Item>
            <Form.Item height={44} name="url" label={String(locale("Url"))}>
              <Input.Url placeholder={String(locale("Please input"))} />
            </Form.Item>
            <Form.Item
              height={44}
              name="datetime"
              label={String(locale("Datetime"))}
            >
              <DatePicker.Combo
                type="datetime"
                placeholder={String(locale("Please select"))}
                allowClear
              />
            </Form.Item>
            <Form.Item height={44} name="date" label={String(locale("Date"))}>
              <DatePicker.Combo
                placeholder={String(locale("Please select"))}
                allowClear
              />
            </Form.Item>
            <Form.Item height={44} name="time" label={String(locale("Time"))}>
              <DatePicker.Combo
                type="time"
                placeholder={String(locale("Please select"))}
                allowClear
              />
            </Form.Item>
            <Form.Item
              height={44}
              name="dateRange"
              label={String(locale("Date range"))}
            >
              <DatePicker.RangeCombo
                placeholder={String(locale("Please select"))}
                allowClear
              />
            </Form.Item>
            <Form.Item
              height={44}
              name="district"
              label={String(locale("District"))}
            >
              <Cascader.DistrictCombo
                placeholder={String(locale("Please select"))}
                allowClear
              />
            </Form.Item>
            <Form.Item
              height={44}
              name="location"
              label={String(locale("Location"))}
            >
              <Location.Combo
                type="gcj02"
                mapConfig={{
                  key: "",
                  type: "bmap",
                }}
                placeholder={String(locale("Please select"))}
                allowClear
                previewVisible
                chooseVisible
              />
            </Form.Item>
            <Form.Item
              height={52}
              name="signature"
              label={String(locale("Signature"))}
            >
              <Signature.Combo />
            </Form.Item>
          </Form>
        </Card>
      </Page.Main>

      {/* Footer */}
      <Footer onOk={handleSave} />

      {/* Error */}
      {(result as { message?: string; status?: string } | null)?.message && (
        <Result
          status={String((result as { status?: string }).status ?? "empty")}
          title={String((result as { message?: string }).message ?? "")}
        />
      )}
    </Page>
  );
};

export default Edit;
