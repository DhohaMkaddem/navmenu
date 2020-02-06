/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Header(props) {
  const list = props.linkListe.map(item => (
    <li key={item.id}>
      <a className="link" href="">
        {item.title}
      </a>
      <ul className="hidden-menu">
        {item.dropDownArr &&
          item.dropDownArr.map(el => (
            <li key={el.id}>
              <a className="link" href="">
                {el.title}
              </a>
            </li>
          ))}
      </ul>
    </li>
  ));
  return (
    <div>
      <ul className="list-link">{list}</ul>
    </div>
  );
}

export default Header;
