import React from "react";

export class ClassSample extends React.Component {
  render() {
    const sampleJsx = <p>Example JSX</p>;
    return (
      <>
        <div>Neki HTML</div>
        {sampleJsx}
      </>
    );
  }
}
