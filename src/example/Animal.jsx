function Animal({ id, name }) {
  return (
    <div>
      <h2>
        This is animal component.{id} with name {name}
      </h2>
      <Goat header="In the goat header." />
    </div>
  );
}
const Goat = (props) => {
  return (
    <div>
      <h3>
        I am a Goat component generated using arrow function {props.header}{" "}
      </h3>
    </div>
  );
};
export default Animal;
