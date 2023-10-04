import { WhiskyType } from "../types";

interface WhiskyListProps {
  whiskies: WhiskyType[];
}

const WhiskyList = ({ whiskies }: WhiskyListProps) => {
  return (
    <div id="whisky-list">
      <h2>All the whiskies!</h2>
      <ul>
        {whiskies.map((whisky: WhiskyType) => {
          return (
            <li key={whisky.name}>
              Name: {whisky.name}
              <br />
              Year: {whisky.year}
              <br></br>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhiskyList;
