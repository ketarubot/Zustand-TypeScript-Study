import Modal from "react-modal";
import { useEffect, useState, useRef } from "react";
import React from "react";

interface Props {
  setAimDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModifyDateModal({ setAimDate, setIsOpen }: Props) {
  const [isDate, setIsDate] = useState(true);
  const dateRef = useRef<HTMLInputElement>(null);

  const toggleDefined = () => {
    const c = !isDate;
    setIsDate(c);
    if (!c) setAimDate(undefined);
  };

  useEffect(() => {
    dateRef.current?.focus();
  }, []);

  const minDate = new Date().toDateString().split("T")[0];

  return (
    <Modal isOpen={true} onRequestClose={() => setIsOpen(false)}>
      <input
        type="date"
        min={minDate}
        onChange={e => setAimDate(new Date(e.target.value))}
        disabled={!isDate}
        ref={dateRef}
      />
      <button onClick={toggleDefined}>{isDate ? "날짜 설정" : "미지정"}</button>
    </Modal>
  );
}

export default React.memo(ModifyDateModal);
