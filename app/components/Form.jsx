function Form(){

  function handleClick(){
    alert("Clicked")
  }


    return(
        <div>
             {/* Form for thge user toinput new data */}
             <form>
                 <label> Name </label>
                    <input type="text" />

                    <label> URL </label>
                    <input type="text" />
              </form>

                <button onClick={handleClick}> Submit </button>

            </div>
        )
}



export default Form