import React,{ useState} from "react";
// import './App.css';
import { Data } from "./Data.jsx";
import { CareerComponent } from "./CareerComponent.js";
// import  {FinancialAnalyst}  from "./Pages/FinancialAnalyst";
import "./details.css";
import { NavLink } from "react-router-dom";


export const Career = ()  => {
  // const navigate = useNavigate();
  const [link, setLink] = useState("");



//  const handleClick = () => {
//   s
//  }

  const [search, setSearch] = useState("");

  return (
    <div className="careerapp">
      <div className="heading">
        <h3>Career Oppurtunites</h3>
      </div>

<div className="careercontent">

      <nav className="nav">
        <NavLink className="link"  to="/accmng"> Account Manager </NavLink>
        <NavLink className="link"  to="/aieng"> Artificial Engineer </NavLink>
        <NavLink className="link"  to="/fullstackdev"> Full Stack Developer</NavLink>
        <NavLink className="link"  to="/sportsmng"> Sports Manager</NavLink>
        <NavLink className="link"  to="/lawyer">Lawyer</NavLink>
        <NavLink className="link"  to="/surgeon">Surgeon</NavLink>

       
      </nav>
      <div className="search">
                <input onChange={(e) => setSearch(e.target.value) }  placeholder="Search..." type="text" className="search_text"/>
                <button type="submit">Go</button>
      </div>

      {Data.filter((item) => {
        return search.toLowerCase() === "" 
        ? item 
        : item.title.toLowerCase().includes(search);
      })
      .map((val) => {
        return (
          <CareerComponent
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            review={val.review}
            salary={val.salary}
            onClick={() => setLink(val.link)}
          />
        )
      })};
      </div>
    </div>
  );
};

