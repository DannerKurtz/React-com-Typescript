interface ICard {
  id: number;
  name: string;
}

export const Card = ({ id, name }: ICard) => {
  return (
    <div>
      Component Card {id}
      <hr></hr>
      <p>name: {name}</p>
    </div>
  );
};
