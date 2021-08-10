class Display {
    constructor(displayPrevValue, displayActualValue) {
        this.displayActualValue = displayActualValue;
        this.displayPrevValue =displayPrevValue;
        this.calculator = new Calculator();
        this.operationType = undefined;
        this.actualValue = '';
        this.prevValue = '';
        this.signs = {
            sum: '+',
            division: '/',
            multiplication: '*',
            substraction: '-',
    }
}

    delete(){
        this.actualValue = this.actualValue.toString().slice(0,-1);
        this.displayValues();
    }

    deleteAll() {
        this.actualValue = '';
        this.prevValue = '';
        this.operationType = undefined;
        this.displayValues();
    }

    compute(type){
        this.operationType !== 'result' && this.calculate();
        this.operationType = type;
        this.prevValue = this.actualValue || this.prevValue;
        this.actualValue = '';
        this.displayValues();
    }

    addNumber(number) {
        if(number === '.' && this.actualValue.includes('.'))return
        this.actualValue = this.actualValue.toString() + number.toString();
        this.displayValues();
    }

    displayValues(){
        this.displayActualValue.textContent = this.actualValue;
        this.displayPrevValue.textContent = `${this.prevValue} ${this.signs[this.operationType] || ''}`;
    }

    calculate () {
        const prevValue = parseFloat(this.prevValue);
        const actualValue = parseFloat(this.actualValue);

        if( isNaN(actualValue)  || isNaN(prevValue) ) return
        this.actualValue = this.calculator[this.operationType](prevValue, actualValue);
    }
}