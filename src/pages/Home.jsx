import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import "../styles/Home.css";
import "../styles/SearchBar.css";
import CloseIcon from "@mui/icons-material/Close";
import dn2 from "../styles/img/dn2.jpg";
import dn from "../styles/img/dn.jpg";
import dn5 from "../styles/img/dn4.jpg";
import mcu1 from "../styles/img/mcu1.jpg";
import mcu3 from "../styles/img/mcu3.jpg";
import "react-slideshow-image/dist/styles.css";
import { Fade, Slide, Zoom } from "react-slideshow-image";

const Home = () => {
  const [character, setCharacter] = useState([]);
  const [popuptoggle, setpopuptoggle] = useState(false);
  // const [results, setResults] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:5566/character",
    }).then((response) => {
      setCharacter(response.data);
      setRecords(response.data);
    });
  }, []);
  const [popupcontent, setpopupcontent] = useState([]);
  const changecontent = (character) => {
    setpopupcontent([character]);
    setpopuptoggle(!popuptoggle);
  };

  const Filter = (e) => {
    setRecords(
      character.filter((character) =>
        character.name.toLowerCase().includes(e.target.value)
      )
    );
  };
  const showButtons = "Hidden";
  return (
    <div className="container-fluid">
      <div className="head">
        <span className="ha2"> marvel characters</span>
      </div>
      <div>
        <input
          type="text"
          className="input-wrapper"
          onChange={Filter}
          placeholder="Search here..."
        /> <span id="srch" class="bi bi-search"></span>
      </div>

      <div>
        <Slide>
          <div className="dstyle">
            <img src={dn2} />
          </div>
          <div className="dstyle">
            <img src={dn} />
          </div>
          <div className="dstyle">
            <img src={mcu1} />
          </div>
          <div className="dstyle">
            <img src={mcu3} />
          </div>
          <div className="dstyle">
            <img src={dn5} />
          </div>
        </Slide>
      </div>

      <div className="ak">
        {records.map((character) => (
          <ol key={character.id}>
            <li>
              <a href={character.img} target="_blank">
                <img height="240px" width="140px" src={character.img} />
              </a>
            </li>
            <br />
            <button onClick={() => changecontent(character)}>
              {character.name}
            </button>
          </ol>
        ))}
        {popuptoggle && (
          <div className="pop_up_container" onClick={changecontent}>
            <div className="pop_up_body">
              <div className="pop_up_header">
                <CloseIcon onClick={changecontent} />
              </div>
              <div className="pop_up_content">
                {popupcontent.map((character) => {
                  return (
                    <div className="pop_up_card">
                      <ul key={character.id}>
                        <li>
                          <b> Name:</b> {character.name}
                        </li>
                        <li>
                          <b> Publisher:</b> {character.Publisher}
                        </li>
                        <li>
                          <b> First apperance:</b> {character.First_appearance}
                        </li>
                        <li>
                          <b> Alter ego:</b> {character.Alter_ego}
                        </li>
                        <li>
                          <b> Species:</b> {character.Species}
                        </li>
                        <li>
                          <b> Team affiliation:</b>{" "}
                          {character.Team_affiliations}
                        </li>
                        <li>
                          <b> Abilities:</b> {character.abilities}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
