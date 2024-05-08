import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface FormValues {
  amount: number;
  months: number;
}

interface FormErrors {
  amount?: string;
  months?: string;
}

const InvestTabContent: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      amount: 100000,
      months: 3
    },
    validate: (values: FormValues): FormErrors => {
      const errors: FormErrors = {};
      if (values.amount < 100000) {
        errors.amount = 'Amount cannot be less than ₦100,000';
      }
      if (values.months < 3) {
        errors.months = 'Tenor cannot be less than 3 months';
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values); // handle submit actions
    }
  });

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters and convert to a number before storing in Formik state
    const value = event.target.value.replace(/,/g, '');
    formik.setFieldValue('amount', Number(value));
  };

  const calculateInterestRate = (amount: number) => {
    if (amount >= 100000 && amount <= 500000) return 0.1;
    if (amount > 500000 && amount <= 3000000) return 0.12;
    if (amount > 3000000 && amount <= 5000000) return 0.15;
    if (amount > 5000000 && amount <= 20000000) return 0.18;
    if (amount > 20000000) return 0.2;
    return 0;
  };

  const totalAtMaturity = () => {
    const rate = calculateInterestRate(formik.values.amount);
    const monthlyPrincipal = formik.values.amount / formik.values.months;
    const totalInterest = formik.values.amount * rate * (formik.values.months / 12); // Assuming the rate is annual
    const totalMaturity = (monthlyPrincipal * formik.values.months) + totalInterest;
    return totalMaturity.toLocaleString(undefined, { minimumFractionDigits: 2 });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="pb-5">
          <label className="block text-sm font-medium text-gray-700">How much do you want to invest?</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-xl bg-customGray py-3 px-3"
            onChange={handleAmountChange}
            value={formik.values.amount.toLocaleString()}
            name="amount"
          />
          {formik.errors.amount && <div className="text-red-500 text-xs font-light">{formik.errors.amount}</div>}
        </div>
        <div className='pt-5'>
          <label className="block text-sm font-medium text-gray-700">For how many months?</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-xl bg-customGray py-3 px-3 text-center"
            onChange={formik.handleChange}
            value={formik.values.months}
            name="months"
          />
          {formik.errors.months && <div className="text-red-500 text-xs font-light">{formik.errors.months}</div>}
        </div>
        <div className="pt-5">
          <label className="block text-sm font-medium text-gray-700">Total at maturity</label>
          <div className="text-lg font-normal">₦{totalAtMaturity()}</div>
        </div>
        <div className="flex items-center justify-center pt-5">
          <button type="submit" className="bg-customGray rounded-lg py-3 px-10">
            <Link to="/getstarted" className="text-[#10d480] flex font-light">
              <ArrowUpRight className="font-light mr-2" />
              Create Investment
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvestTabContent;
