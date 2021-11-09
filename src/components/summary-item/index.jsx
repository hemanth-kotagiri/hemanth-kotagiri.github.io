import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, description, link = false, internal = false , title }) => {
  let linkContent, listItems = null;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  const moreThanOnePoint = description.length > 1 && typeof description === "object";

  if (moreThanOnePoint) {
      description = Array.from(description);
    listItems = description.map((item, index) => <p key={ index } className={classes.description}>{item}</p>
    );
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
    {listItems ? listItems : <p className={classes.description}>{description}</p>}
    </div>
  );
};

export default SummaryItem;
