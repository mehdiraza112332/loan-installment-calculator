import { useState } from "react";

function App() {
  const [loanAmount, setLoanAmount] = useState<string>("100000");

  const FINANCING_TERM = 12;
  const MURABHA_RATE = 0.1;
  const ADMIN_FEES_RATE = 0.01;
  const MIN_AMOUNT = 20000;
  const MAX_AMOUNT = 1000000;

  const calculateLoan = () => {
    const amount = parseFloat(loanAmount) || 0;
    const adminFees = amount * ADMIN_FEES_RATE;
    const totalLoanAmount = amount + adminFees;
    const murabhaAmount = amount * MURABHA_RATE;
    const totalWithMurabha = totalLoanAmount + murabhaAmount;
    const monthlyInstallment = totalWithMurabha / FINANCING_TERM;

    return {
      monthlyInstallment: monthlyInstallment.toFixed(0),
      totalLoanAmount: totalLoanAmount.toFixed(0),
      adminFeesRate: (ADMIN_FEES_RATE * 100).toFixed(0),
      murabhaRate: (MURABHA_RATE * 100).toFixed(0),
      financingTerm: FINANCING_TERM,
    };
  };

  const loanDetails = calculateLoan();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setLoanAmount(value);
  };

  const formatNumber = (num: string) => {
    return new Intl.NumberFormat("en-US").format(parseInt(num));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">
      {/* Main Container - Single Rounded Card */}
      <div className="w-full max-w-[1440px] rounded-[32px] overflow-hidden border border-black bg-gradient-main shadow-main-container">
        {/* Header Section */}
        <header className="flex flex-col items-center relative py-4 px-4 md:py-5 md:px-6 bg-header-bg border-b border-header-border h-auto md:h-[64.14px]">
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="text-xl md:text-2xl font-normal text-gradient-toot">
              toot
            </div>
            <div className="text-[8px] md:text-[9.42857px] font-medium uppercase tracking-[0.01em] leading-[9px] text-gradient-business">
              BUSINESS
              <br />
              FINANCING
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="relative md:min-h-[600px] xl:min-h-[755.86px]">
          {/* Desktop Layout (1280px+) - Absolute Positioning */}
          <div className="hidden xl:block">
            {/* Left Column - Input Form Section */}
            <div className="flex flex-col items-start p-0 gap-12 absolute w-[400px] h-[297px] left-40 top-[195.86px]">
              {/* Title and Description Container */}
              <div className="flex flex-col items-start w-full gap-[19px]">
                <h1 className="w-full h-8 text-[30px] leading-8 font-normal text-gradient-title">
                  Calculate the loan Amount
                </h1>
                <div className="w-[400px] h-28 text-base leading-6 flex flex-col items-start gap-2 text-text-gray font-normal flex-none order-1 self-stretch flex-grow-0 font-suisse">
                  <p>
                    Please enter the financing amount required to
                    <br />
                    calculate the monthly installment.
                  </p>
                  <p>
                    The amount must be between SAR {MIN_AMOUNT.toLocaleString()}{" "}
                    and SAR {MAX_AMOUNT.toLocaleString()}.
                  </p>
                </div>
              </div>

              {/* Input Field Container */}
              <div className="flex flex-col items-end p-0 gap-[10px] w-[400px] h-[86px]">
                {/* Input with Label Container */}
                <div className="flex flex-col items-start p-0 gap-4 w-[400px] h-[86px]">
                  {/* Label Wrapper */}
                  <div className="flex flex-row justify-end items-start p-0 gap-0.5 w-[85px] h-5">
                    <label className="text-sm leading-5 w-[85px] h-5 text-text-light">
                      Loan amount
                    </label>
                  </div>

                  {/* Input */}
                  <div className="relative flex flex-row justify-end items-center rounded-lg w-[400px] h-14 bg-input-bg border border-border-gray px-[14px] py-[10px] gap-2">
                    {/* Content Container */}
                    <div className="flex flex-row justify-end items-center flex-1 w-[372px] h-[24.77px] gap-2">
                      <input
                        type="text"
                        value={formatNumber(loanAmount)}
                        onChange={handleInputChange}
                        className="flex-1 text-base leading-6 focus:outline-none bg-transparent border-none w-[342px] h-6 text-left text-text-white"
                        placeholder="100,000"
                      />
                      {/* SAR Currency SVG */}
                      <div className="w-[22px] h-[24.77px] flex-shrink-0">
                        <svg
                          width="22"
                          height="25"
                          viewBox="0 0 22 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 20.1934C21.8546 21.3754 21.7911 21.8878 21.248 23.04L12.9102 24.7705C13.1018 23.5253 13.3582 22.5654 13.7734 21.9893L22 20.1934ZM10.3867 12.043L12.8789 11.499V3.58496C13.8071 2.53752 14.3776 2.06722 15.498 1.47266V10.9277L22 9.50879C21.8546 10.6904 21.7908 11.2027 21.248 12.3545L15.498 13.5762V16.2344L22 14.8516C21.8546 16.0333 21.7908 16.5455 21.248 17.6973L15.498 18.8906V18.916L12.8789 19.46V14.1328L10.3867 14.6621V18.0195L10.3447 18.0273C9.77169 19.0376 8.9625 20.2517 8.18262 21.2207L0 22.7871C0.0733717 21.7287 0.227015 21.1325 0.703125 20.0664L7.76758 18.5264V15.2188L1.21973 16.6113C1.2931 15.5533 1.44601 14.9573 1.92188 13.8916L7.76758 12.6143V2.1123C8.69577 1.06489 9.26638 0.59452 10.3867 0V12.043Z"
                            fill="#F7F7F7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Results Card */}
            <div className="box-border flex flex-col items-center rounded-lg py-8 px-5 gap-8 absolute w-[640px] h-[497px] left-[640px] top-[63.86px] bg-card-bg border border-border-gray">
              {/* Monthly Installment Header */}
              <div className="flex flex-col items-start w-[600px] gap-2">
                <p className="text-base leading-6 text-center w-full text-text-light">
                  Total Monthly Installment
                </p>
                <div className="flex flex-row items-center justify-center gap-2 mx-auto">
                  <span className="text-[36px] font-normal leading-[44px] tracking-[-0.02em] flex items-center text-center text-gradient-amount">
                    {formatNumber(loanDetails.monthlyInstallment)}
                  </span>
                  <svg
                    width="27"
                    height="30"
                    viewBox="0 0 27 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27 24.457C26.8216 25.8886 26.7426 26.5088 26.0762 27.9043L15.8447 30.001C16.0799 28.4928 16.3937 27.3296 16.9033 26.6318L27 24.457ZM12.748 14.585L15.8057 13.9268V4.3418C16.9449 3.07307 17.6453 2.50334 19.0205 1.7832V13.2344L27 11.5156C26.8216 12.9472 26.7425 13.5675 26.0762 14.9629L19.0205 16.4424V19.6621L27 17.9873C26.8216 19.4187 26.7426 20.0391 26.0762 21.4346L19.0205 22.8789V22.9102L15.8057 23.5693V17.1172L12.748 17.7578V21.8242L12.6963 21.834C11.993 23.0575 11 24.5276 10.043 25.7012L0 27.5977C0.0900568 26.3159 0.27803 25.5939 0.862305 24.3027L9.5332 22.4375V18.4326L1.49707 20.1191C1.58712 18.8372 1.77507 18.1155 2.35938 16.8242L9.5332 15.2783V2.55859C10.6725 1.28985 11.3729 0.720142 12.748 0V14.585Z"
                      fill="url(#paint0_linear_1_6220)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_6220"
                        x1="32.5588"
                        y1="25.0008"
                        x2="-0.0134902"
                        y2="25.0903"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5F5C5A" />
                        <stop offset="0.26" stopColor="#D6C0A6" />
                        <stop offset="0.495" stopColor="#C7D1CB" />
                        <stop offset="0.745" stopColor="#C5D9E4" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-full">
                <div className="flex flex-col items-start gap-1.5">
                  <p className="text-base leading-6 text-text-label">
                    Financing Term
                  </p>
                  <p className="text-lg leading-5 text-text-value">
                    {loanDetails.financingTerm} months
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <p className="text-base leading-6 text-text-label">
                    Murabha Rate
                  </p>
                  <p className="text-lg leading-5 text-text-value">
                    {loanDetails.murabhaRate}%
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <p className="text-base leading-6 text-text-label">
                    Administrative Fees
                  </p>
                  <p className="text-lg leading-5 text-text-value">
                    {loanDetails.adminFeesRate}%
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <p className="text-base leading-6 text-text-label">
                    Total Loan Amount Including Fees
                  </p>
                  <p className="text-lg leading-5 text-text-value">
                    {formatNumber(loanDetails.totalLoanAmount)} SAR
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-[600px] h-px bg-divider opacity-30 flex-none self-stretch flex-grow-0"></div>

              {/* Info Text and CTA */}
              <div className="flex flex-col items-center gap-6 w-full">
                <p className="text-base leading-6 text-center text-text-value">
                  Lower and faster than bank financing in Saudi Arabia, with no
                  hidden fees
                </p>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-3 w-full">
                  <button className="box-border flex flex-row justify-center items-center py-4 px-[22px] gap-2 w-[437px] h-[60px] bg-button-bg shadow-button-skeuomorphic rounded-full font-semibold text-lg leading-7 text-button-text flex-none self-auto">
                    Continue Financing Application
                  </button>

                  {/* Footer Text */}
                  <div className="flex flex-row items-center p-0 gap-[5px] w-[295px] h-6 flex-none order-1 flex-grow-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 5V11L7 13M1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11Z"
                        stroke="#CECFD2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p className="text-base leading-6 text-center text-text-light">
                      Complete the application in minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Layout (Below 1280px) */}
          <div className="xl:hidden px-4 md:px-8 lg:px-16 py-8 md:py-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
              {/* Left Column - Input Form Section */}
              <div className="flex flex-col items-start w-full lg:w-auto lg:max-w-[400px] gap-8 md:gap-12">
                {/* Title and Description Container */}
                <div className="flex flex-col items-start w-full gap-4 md:gap-[19px]">
                  <h1 className="w-full text-2xl md:text-[30px] leading-tight md:leading-8 font-normal text-gradient-title">
                    Calculate the loan Amount
                  </h1>
                  <div className="w-full text-sm md:text-base leading-6 flex flex-col items-start gap-2 text-text-gray font-normal font-suisse">
                    <p>
                      Please enter the financing amount required to
                      <br />
                      calculate the monthly installment.
                    </p>
                    <p>
                      The amount must be between SAR{" "}
                      {MIN_AMOUNT.toLocaleString()} and SAR{" "}
                      {MAX_AMOUNT.toLocaleString()}.
                    </p>
                  </div>
                </div>

                {/* Input Field Container */}
                <div className="flex flex-col items-end w-full gap-[10px]">
                  {/* Input with Label Container */}
                  <div className="flex flex-col items-start w-full gap-4">
                    {/* Label Wrapper */}
                    <div className="flex flex-row justify-end items-start gap-0.5">
                      <label className="text-sm leading-5 text-text-light">
                        Loan amount
                      </label>
                    </div>

                    {/* Input */}
                    <div className="relative w-full flex flex-row justify-end items-center rounded-lg h-12 md:h-14 bg-input-bg border border-border-gray px-3 md:px-[14px] py-2 md:py-[10px] gap-2">
                      {/* Content Container */}
                      <div className="flex flex-row justify-end items-center flex-1 gap-2">
                        <input
                          type="text"
                          value={formatNumber(loanAmount)}
                          onChange={handleInputChange}
                          className="flex-1 text-sm md:text-base leading-6 focus:outline-none bg-transparent border-none text-left text-text-white min-w-0"
                          placeholder="100,000"
                        />
                        {/* SAR Currency SVG */}
                        <div className="w-[18px] md:w-[22px] h-[20px] md:h-[24.77px] flex-shrink-0">
                          <svg
                            width="22"
                            height="25"
                            viewBox="0 0 22 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                          >
                            <path
                              d="M22 20.1934C21.8546 21.3754 21.7911 21.8878 21.248 23.04L12.9102 24.7705C13.1018 23.5253 13.3582 22.5654 13.7734 21.9893L22 20.1934ZM10.3867 12.043L12.8789 11.499V3.58496C13.8071 2.53752 14.3776 2.06722 15.498 1.47266V10.9277L22 9.50879C21.8546 10.6904 21.7908 11.2027 21.248 12.3545L15.498 13.5762V16.2344L22 14.8516C21.8546 16.0333 21.7908 16.5455 21.248 17.6973L15.498 18.8906V18.916L12.8789 19.46V14.1328L10.3867 14.6621V18.0195L10.3447 18.0273C9.77169 19.0376 8.9625 20.2517 8.18262 21.2207L0 22.7871C0.0733717 21.7287 0.227015 21.1325 0.703125 20.0664L7.76758 18.5264V15.2188L1.21973 16.6113C1.2931 15.5533 1.44601 14.9573 1.92188 13.8916L7.76758 12.6143V2.1123C8.69577 1.06489 9.26638 0.59452 10.3867 0V12.043Z"
                              fill="#F7F7F7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Results Card */}
              <div className="box-border flex flex-col items-center rounded-lg py-6 md:py-8 px-4 md:px-5 gap-6 md:gap-8 w-full lg:w-auto lg:max-w-[640px] bg-card-bg border border-border-gray">
                {/* Monthly Installment Header */}
                <div className="flex flex-col items-start w-full gap-2">
                  <p className="text-sm md:text-base leading-6 text-center w-full text-text-light">
                    Total Monthly Installment
                  </p>
                  <div className="flex flex-row items-center justify-center gap-2 mx-auto">
                    <span className="text-2xl md:text-[36px] font-normal leading-tight md:leading-[44px] tracking-[-0.02em] flex items-center text-center text-gradient-amount">
                      {formatNumber(loanDetails.monthlyInstallment)}
                    </span>
                    <svg
                      width="27"
                      height="30"
                      viewBox="0 0 27 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 md:w-7 h-7 md:h-8"
                    >
                      <path
                        d="M27 24.457C26.8216 25.8886 26.7426 26.5088 26.0762 27.9043L15.8447 30.001C16.0799 28.4928 16.3937 27.3296 16.9033 26.6318L27 24.457ZM12.748 14.585L15.8057 13.9268V4.3418C16.9449 3.07307 17.6453 2.50334 19.0205 1.7832V13.2344L27 11.5156C26.8216 12.9472 26.7425 13.5675 26.0762 14.9629L19.0205 16.4424V19.6621L27 17.9873C26.8216 19.4187 26.7426 20.0391 26.0762 21.4346L19.0205 22.8789V22.9102L15.8057 23.5693V17.1172L12.748 17.7578V21.8242L12.6963 21.834C11.993 23.0575 11 24.5276 10.043 25.7012L0 27.5977C0.0900568 26.3159 0.27803 25.5939 0.862305 24.3027L9.5332 22.4375V18.4326L1.49707 20.1191C1.58712 18.8372 1.77507 18.1155 2.35938 16.8242L9.5332 15.2783V2.55859C10.6725 1.28985 11.3729 0.720142 12.748 0V14.585Z"
                        fill="url(#paint0_linear_1_6220_responsive)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_6220_responsive"
                          x1="32.5588"
                          y1="25.0008"
                          x2="-0.0134902"
                          y2="25.0903"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#5F5C5A" />
                          <stop offset="0.26" stopColor="#D6C0A6" />
                          <stop offset="0.495" stopColor="#C7D1CB" />
                          <stop offset="0.745" stopColor="#C5D9E4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 w-full">
                  <div className="flex flex-col items-start gap-1.5">
                    <p className="text-sm md:text-base leading-6 text-text-label">
                      Financing Term
                    </p>
                    <p className="text-base md:text-lg leading-5 text-text-value">
                      {loanDetails.financingTerm} months
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <p className="text-sm md:text-base leading-6 text-text-label">
                      Murabha Rate
                    </p>
                    <p className="text-base md:text-lg leading-5 text-text-value">
                      {loanDetails.murabhaRate}%
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <p className="text-sm md:text-base leading-6 text-text-label">
                      Administrative Fees
                    </p>
                    <p className="text-base md:text-lg leading-5 text-text-value">
                      {loanDetails.adminFeesRate}%
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <p className="text-sm md:text-base leading-6 text-text-label">
                      Total Loan Amount Including Fees
                    </p>
                    <p className="text-base md:text-lg leading-5 text-text-value">
                      {formatNumber(loanDetails.totalLoanAmount)} SAR
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-divider opacity-30"></div>

                {/* Info Text and CTA */}
                <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
                  <p className="text-sm md:text-base leading-6 text-center text-text-value">
                    Lower and faster than bank financing in Saudi Arabia, with
                    no hidden fees
                  </p>

                  {/* CTA Button */}
                  <div className="flex flex-col items-center gap-3 w-full">
                    <button className="box-border flex flex-row justify-center items-center py-3 md:py-4 px-4 md:px-[22px] gap-2 w-full max-w-[437px] h-auto md:h-[60px] bg-button-bg shadow-button-skeuomorphic rounded-full font-semibold text-base md:text-lg leading-6 md:leading-7 text-button-text">
                      Continue Financing Application
                    </button>

                    {/* Footer Text */}
                    <div className="flex flex-row items-center gap-[5px] w-full max-w-[295px] justify-center">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 md:w-5 md:h-5"
                      >
                        <path
                          d="M11 5V11L7 13M1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11Z"
                          stroke="#CECFD2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <p className="text-sm md:text-base leading-6 text-center text-text-light">
                        Complete the application in minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
