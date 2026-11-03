import { Form, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { calculateFourValve } from "../utils/CalculatorFourValve";
import { calculateTwoValve } from "../utils/CalculatorTwoValve";
const inintialResult = {
  intakeHole: 0,
  intakeSeat: 0,
  exhaustHole: 0,
  exhaustSeat: 0,
};
const PortingCalculator = ({ valveType }: { valveType: number }) => {
  const [form] = Form.useForm();
  const intakeValue = Form.useWatch("intake", form);
  const exhaustValve = Form.useWatch("exhaust", form);
  const [result, setResult] = useState(inintialResult);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (intakeValue && exhaustValve) {
        if (valveType === 4) {
          const res = calculateFourValve(intakeValue, exhaustValve);
          setResult(res);
        } else if (valveType === 2) {
          const res = calculateTwoValve(intakeValue, exhaustValve);
          setResult(res);
        }
      } else {
        setResult(inintialResult);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [intakeValue, exhaustValve, valveType]);
  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item name="exhaust" label="Kích thước val xả" required>
          <InputNumber
            className="w-full!"
            placeholder="Nhập kích thước val xả"
            controls={false}
            decimalSeparator=","
            min={0}
            inputMode="decimal"
          />
        </Form.Item>
        <Form.Item name="intake" label="Kích thước val nạp" required>
          <InputNumber
            className="w-full!"
            placeholder="Nhập kích thước val nạp"
            controls={false}
            decimalSeparator=","
            min={0}
            inputMode="decimal"
          />
        </Form.Item>
        <p className="text-primary/80 mb-4">Kết quả thông số</p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex-1">
            {valveType !== 2 && (
              <Form.Item label="Móc lỗ xả" className="flex-1">
                <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
                  {result.exhaustHole || 0}
                </p>
              </Form.Item>
            )}
            <Form.Item label="Móc miệng lỗ xả" className="flex-1">
              <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
                {result.exhaustSeat || 0}
              </p>
            </Form.Item>
          </div>
          <div className="flex-1">
            {valveType !== 2 && (
              <Form.Item label="Móc lỗ nạp" className="flex-1">
                <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
                  {result.intakeHole || 0}
                </p>
              </Form.Item>
            )}
            <Form.Item label="Móc miệng lỗ nạp" className="flex-1">
              <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
                {result.intakeSeat || 0}
              </p>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PortingCalculator;
