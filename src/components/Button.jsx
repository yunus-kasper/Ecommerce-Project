import { twMerge } from "tailwind-merge";

function Button({
  children,
  btnClass = "",
  className = "",
  arrowRight,
  cart,
  disabled,
}) {
  return (
    <>
      <button
        disabled={disabled}
        className={twMerge(
          `${cart ? "secondary-btn" : "gradient-btn group"}`,
          btnClass
        )}
      >
        <span
          className={twMerge(
            "gradient-btn-content flex gap-2 text-[14px] items-center",
            className
          )}
        >
          {children}{" "}
          {arrowRight && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right-short group-hover:text-[#d3a828]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          )}
        </span>
      </button>
    </>
  );
}

export default Button;
