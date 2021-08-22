import React, { Fragment } from "react";

const GetCountry = ({country}) => {
  return (
    <Fragment>
      <div>
        {`Name - ${country.name}`}
      </div>
      <div>
        {`native - ${country.native}`}
      </div>
      <div>
        {`capital - ${country.capital}`}
      </div>
      <div>
        {`emoji - ${country.emoji}`}
      </div>
      <div>
        {`currency - ${country.currency}`}
      </div>
      {country.languages?.map((languages, index) => {
        return (
          <div key={index}>
            <div>
              Code - {languages !== undefined && languages.code}
            </div>
            <div>
              Name - {languages !== undefined && languages.name}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default GetCountry;