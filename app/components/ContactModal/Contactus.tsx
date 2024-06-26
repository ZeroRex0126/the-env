"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { modelPropInterface } from "@/app/interfaces/modalProp.interface";
import { sendEmail } from "@/app/services/sendEmail";
import { validateEmail, validatePhoneNumber } from "@/app/services/validations";

const Contactusform = ({
  isOpen = false,
  setIsOpen,
  toggleModal,
  openModal,
}: modelPropInterface) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
    phoneNr: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phoneNr: "",
  });

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));

    switch (name) {
      case "email":
        if (validateEmail(value)) {
          setErrors((preError) => ({
            ...preError,
            [name]: "",
          }));
        } else {
          setErrors((preError) => ({
            ...preError,
            [name]: "Please enter a valid Email.",
          }));
        }
        break;
      case "phoneNr":
        if (validatePhoneNumber(value)) {
          setErrors((preError) => ({
            ...preError,
            [name]: "",
          }));
        } else {
          setErrors((preError) => ({
            ...preError,
            [name]: "Please enter a valid Phone Number.",
          }));
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (
      errors.phoneNr === "" &&
      errors.email === "" &&
      inputValues.name !== "" &&
      inputValues.message !== ""
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [inputValues, isValid]);

  const handleClick = async () => {
    if (isValid) {
      setIsLoading(true);
      let emailRes = await sendEmail(inputValues);
      if (emailRes) {
        setInputValues({
          name: "",
          email: "",
          message: "",
          phoneNr: "",
        });
        setIsLoading(false);
        setIsOpen(false);
        if (errorMessage !== "") {
          setErrorMessage("");
        }
        if(toggleModal){
          toggleModal();
        }
      } else {
        setErrorMessage(
          "An error has occured while trying to contact The Envelope, Please use contact details."
        );
      }
    }
  };

  // Validate form

  // FORM SUBMIT
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // handle form submission
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen ? true : false} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                  <div className="flex flex-shrink-0 items-center justify-center">
                    <Link
                      href="/"
                      className="text-2xl sm:text-4xl font-semibold text-black"
                    >
                      The Envelope
                    </Link>
                  </div>
                  <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Contact us now? <br /> Want to send us a feedback?
                  </p>
                  <form
                    action="#"
                    className="space-y-8"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Name
                      </label>
                      {/* {errors.name && <p>{errors.name}</p>} */}
                      <input
                        id="text"
                        name="name"
                        value={inputValues.name}
                        onChange={handleChange}
                        type="text"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Name..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNr"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Phone Number
                        <span className="text-rose text-xs italic">
                          {" "}
                          {errors.phoneNr}
                        </span>
                      </label>

                      <input
                        id="phoneNr"
                        name="phoneNr"
                        value={inputValues.phoneNr}
                        onChange={handleChange}
                        type="phoneNr"
                        autoComplete="current-password"
                        required
                        className={`relative block w-full appearance-none  rounded-md border ${
                          errors.phoneNr === ""
                            ? "border-linegrey"
                            : "border-rose-500"
                        } px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                        placeholder="0123456789"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your email
                        <span className="text-rose text-xs italic">
                          {" "}
                          {errors.email}
                        </span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        value={inputValues.email}
                        onChange={handleChange}
                        type="email"
                        autoComplete="current-password"
                        required
                        className={`relative block w-full appearance-none rounded-md border ${
                          errors.email === ""
                            ? "border-linegrey"
                            : "border-rose-500"
                        } px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                        placeholder="xyz@email.com"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={inputValues.message}
                        onChange={handleChange}
                        className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Leave a comment..."
                      ></textarea>
                    </div>
                    <p className="mb-8 lg:mb-16 mt-8 font-light text-rose sm:text-xl">
                      {errorMessage}
                    </p>
                    <button
                      type="submit"
                      onClick={handleClick}
                      disabled={!isValid}
                      className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-sky focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      {isLoading ? (
                        <div
                          className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                          role="status"
                        >
                          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                          </span>
                        </div>
                      ) : (
                        <>Send message</>
                      )}
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Contactusform;
