import { WhiskyType } from "../types";

const WhiskyList = ({ whiskies }) => {
  return (
    <div id="whisky-list">
      <h2>All the whiskies!</h2>
      <ul>
        {whiskies.map((whisky: WhiskyType) => {
          return (
            <li key={whisky.name}>
              {whisky.name} by {whisky.year}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhiskyList;
