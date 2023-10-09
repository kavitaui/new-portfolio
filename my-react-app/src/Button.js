

export default function Button() {
    const value = () => {
        debugger;
        let a = 10;
        let b = 20;
        let c = 30;
        let d = 40
        let e = a + b + c + d;
        console.log(e);
        return e;
    }
    const multiply = () => {
        debugger;
        let f = value() * 4;
        console.log(f);
        return f;

    } 
    const add=()=>{
        let adding = multiply();
        adding +=10;
        console.log(adding);

    }






    return (
        <div>
            <button onClick={add}>knionoi</button>




        </div>
    )
}