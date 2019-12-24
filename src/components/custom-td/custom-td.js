import React, {Component} from 'react';
import './custom-td.css';

export default class CustomTD extends Component{

    state = {
        id: '',
        value: '',
        input: false,
        isLoadded: false
    };
   // constructor(props) {
   //     super(props);
   //     this.myRef = React.createRef();
   // }
    setValue =(newValue, id)=>{
        this.setState({
            id: id,
            value: newValue
        }, ()=>console.log("NewValue = " + this.state.value + " thisId = " + this.state.id));
    };

    changeStateInput = (input) =>{
        this.setState({
            input: input
        });
    };
    checkIsLoadded = () =>{
        this.setState({
            isLoadded: true
        });
    };
    setSumValue =(sumValue, id)=>{
        this.setState({
            id: id,
            value: sumValue
        }, ()=>console.log("sumValue = " + this.state.value));
    };
    getCellValue = (id) => {
       // document.getElementsByTagName("td").map((cellId)=>{
       //     if(cellId === id)
       //     {()=>console.log("Yes");}
       // });
        let content = document.getElementById(id);
        //let cellValue = this.myRef.current;
        let cellValue = content.firstChild.nodeValue;
        if(cellValue === "")
        {cellValue = 0}
        console.log("rangeIds = " + id);
        //console.log("content = " + content);
        console.log("CellValue = " + cellValue);
        return cellValue;
    };
    render() {
        const {id, type, color, cellState, action} = this.props;
        let {value, counter} = this.props;

        return (
            <td
                id={id}
                ref={this.myRef}
                type={type}
                style={{backgroundColor: color}}
                state={cellState}
                action={action}
                onDoubleClick={() => action === 'input' && this.state.input === false && counter === 0
                   ?
                    this.setState({
                        input:true,
                    }, () => this.props.changeCounter(++counter))
                   : null}
                ><>{this.state.input
                           ?
                           (
                              <InputValue
                                 id={id}
                                 type={type}
                                 value={value || this.state.value}
                                 counter={counter}
                                 input={this.state.input}
                                 changeCounter={this.props.changeCounter}
                                 changeStateInput={this.changeStateInput}
                                 setValue={this.setValue}
                              />
                           )
                           : this.state.value ||
                              value}</>

                <>{action === "sum" //&& this.state.isLoadded
                    ?
                    (
                       <SumValues
                          id={id || this.state.id}
                          type={type}
                          value={value || this.state.value}
                          isLoadded={this.state.isLoadded}
                          range={"1321:1331:1371:13121"}
                          //ref={this.myRef}
                          getCellValue={this.getCellValue}
                          checkIsLoadded={this.checkIsLoadded}
                          setSumValue={this.setSumValue}
                       />
                    )
                    : null
                      //this.setState({
                      //    isLoadded: true
                     // })
                }</>

                </td>


        );
    }
}
class InputValue extends Component{
    state = {
        id: '',
        value: '',
        input: true
    };
     saveValue = (e, id) =>{
        e.preventDefault(e);
        const newValue = e.target.elements.newInput.value;

        this.setState({
            id: id,
            value: newValue,
            input: false
        }, ()=>this.rewritePropsValues()
       );
    };
    rewritePropsValues = () =>{
        this.props.changeCounter(this.props.counter - 1);
        this.props.changeStateInput(this.state.input);
        this.props.setValue(this.state.value, this.state.id);
    };
    render(){
        let {id, type, value} = this.props;
        if (value === '') {
            value = undefined;
        }
        //console.log("id = " + id);
        //console.log("type = " + type);

       // console.log("value = " + this.state.value);

        //console.log("Success");
        return(this.state.input
            ?
            (<form onSubmit={(e) => this.saveValue(e, id)}>
                <input type={type}
                       defaultValue={value}
                       name="newInput"
                       autoFocus
                       min="0"
                       max="10000"
                       step="1"
                       size="15"
                       maxLength="5"/>
            </form>)
            : this.state.value
        );
    }
}

class SumValues extends Component{
    state = {
        id: '',
        value: ''
    };

    sumValues = (range, id) => {
        let sumValue = 0;
        range.map((id) => {
            sumValue +=
                +this.props.getCellValue(id);
        });
        //console.log("SumId = " + id);
        //console.log("Sum = " + sumValue);
        return sumValue;
    };


        // add change value into main state
        //console.log("rangeIds = " + id);
       // console.log("content = " + content);

 //   rewritePropsSumValue = () => {
   //
  //  };
//    componentWillReceiveProps(nextProps, nextContext) {
//        let {range, id} = nextProps;
//        range = range.split(':');
//        if(this.state.id === nextProps.id)
 //       {this.sumValues(range, id);}
//    };

    componentDidMount = () =>{
        let {range, id} = this.props;
        range = range.split(':');
        let sumValue = this.sumValues(range, id);
        console.log("Sum = " + sumValue);
        this.setState({
              id: id,
              value: sumValue

        }, ()=>this.props.setSumValue(sumValue, id));

    };
    // com
    // lll
      componentDidUpdate(prevProps, prevState, snapshot) {

          let {range, id} = this.props;
          range = range.split(':');
          let sumValue = this.sumValues(range, id);
          if (id === prevState.id && sumValue !== prevState.value) {
              console.log("Sum = " + sumValue);
              this.setState({
                  id: id,
                  value: sumValue

              }, () => this.props.setSumValue(sumValue, id));
          }
      }

    render(){
        const {id, type} = this.props;
        let {range, value, isLoadded} = this.props;
        if (value === '') {
            value = 0;
        }
        if(isLoadded) {
            //console.log("cellId = " + id);
            //console.log("type = " + type);
            //console.log("Value = " + value);
            //range = range.split(':');
            //componentDidMount()
            //let {range, id} = this.props;
            //range = range.split(':');
            //let sumValue = this.sumValues(range, id);
            //console.log("ID = " + id);
            //console.log("Sum = " + sumValue);
           // this.setState({
           //      id: id,
           //      value: sumValue

         //  });
            //this.props.setSumValue(sumValue, id);
        }
        else
        {this.props.checkIsLoadded()}
        //console.log("Activate class!!!");
        return (
           <div></div>
        );
    }
}