import { useCallback, useState } from "react";
import type { BookState, Status } from "../types";
import React from "react";
import ModifyDateModal from "./ModifyDateModal";

interface Props {
  info: BookState;
}

function BookCard({ info }: Props) {
  const [curPage, setCurPage] = useState(info.curPage);
  const [aimDate, setAimDate] = useState(info.aim);
  const [status, setStatus] = useState(info.status);
  const [isOpen, setIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isInterest, setIsInterest] = useState(false);

  const changeCurPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cp = parseInt(e.target.value);
    setCurPage(cp);
    if (cp === info.lastPage) {
      setIsCompleted(true);
      setStatus("다 읽음" satisfies Status);
    }
  };

  const changeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cv = e.target.value as Status;
    if (cv === "관심 있음") {
      setIsInterest(true);
      setCurPage(0);
    } else setIsInterest(false);
  };

  const toggleIsOpen = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <div className="bookListItem">
      <div className="bookInfo">
        <span className="bookName">{info.book.name}</span>
        <span className="author">{info.book.author}</span>
      </div>
      <div className="bookStat">
        <span className="page">
          <input
            type="number"
            min="1"
            max={info.lastPage}
            value={curPage}
            className="curPage"
            onKeyDown={e => e.preventDefault()}
            onChange={changeCurPage}
            disabled={isCompleted || isInterest}
          />
          /{info.lastPage}
        </span>
        <button onClick={toggleIsOpen} className="aimDate">
          {aimDate ? new Date(aimDate).toDateString() : "미지정"}
        </button>
        {isOpen && <ModifyDateModal setAimDate={setAimDate} setIsOpen={setIsOpen} />}
        <select className="status" value={status} onChange={changeStatus} disabled={isCompleted}>
          <option value="읽는 중">읽는 중</option>
          <option value="관심 있음">관심 있음</option>
        </select>
      </div>
    </div>
  );
}

export default React.memo(BookCard);
