const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  );
};

const Content = (props) => {

  return (
    <div>
      {props.parts.map(part => {
        return (
          <p>{part.name} {part.exercises}</p>
        );
      })}
    </div>
  );
};

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => {
    sum += part.exercises
    return sum
  }, 0)

  return (
    <p>Number of exercises {total}</p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };
  const parts = [
    part1, part2, part3
  ];

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  );
};

export default App;
