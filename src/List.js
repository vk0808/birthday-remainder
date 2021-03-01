import React from "react";
import moment from "moment";
import Birthday from "./Birthday";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ people, removePerson, editPerson }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, date, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div className="pesron-info">
              <h4>{name}</h4>
              <p>{moment(date).format("MMM Do YYYY")}</p>
              <p>{age}</p>
              <Birthday
                name={name}
                day={moment(date).format("D")}
                month={moment(date).format("M")}
              />
            </div>
            <div className="btns">
              <button className="btn" onClick={() => editPerson(id)}>
                <FaEdit />
              </button>
              <button className="btn">
                <FaTrash onClick={() => removePerson(id)} />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
