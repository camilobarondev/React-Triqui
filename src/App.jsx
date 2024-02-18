function Square(){
  return <button>1</button>
}
export default function Board() {
  return (
    <>
    <div>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div>
      <Square/>
      <Square/>
      <Square/>
    </div>
    </>)
}