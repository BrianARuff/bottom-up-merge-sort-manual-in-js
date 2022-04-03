function fakeRandomNumber() {
    const r = Math.random();
    const d = Date.now();
    const randNumber = String(Math.round(r * d / 360));
    return randNumber;
}

let data = [-fakeRandomNumber(), fakeRandomNumber(), -fakeRandomNumber(), fakeRandomNumber(), fakeRandomNumber(), -fakeRandomNumber()];

function mergeSort(arr) {
    return recurseMegeSort(arr);
}

function recurseMegeSort(arr) {
    const len = arr.length;

    const mid = floor(len);

    const left = slice(arr, 0, mid);

    const right = slice(arr, mid, len);

    if (!arr) throw new Error('No array supplied from variable', arr);

    if (arr.length === 1) return arr;

    if (right.length === 2) swap(right);

    if (left.length === 2) swap(left);

    if (left.length > 2 || right.length > 2) {
        const newLeft = recurseMegeSort(left);
        const newRight = recurseMegeSort(right);

        const tempArr = [...newLeft, ...newRight];

        const newArr = merge(tempArr, newLeft, newRight);

        return newArr;
    }

    const tempArr = [...left, ...right];

    const newArr = merge(tempArr, left, right);

    return newArr;
}


function merge(arr, left, right) {
    const newArr = [];
    let i = 0;

    let j = 0;

    for (let k = 0; k < arr.length; k++) {
        if (!right[j] && !left[i]) break;

        if (!right[j]) {
            newArr[k] = left[i];
            i++;
            continue;
        }

        if (!left[i]) {
            newArr[k] = right[j];
            j++;
            continue;
        }

        if (i <= left.length) {
            if (left[i] <= right[j]) {
                newArr[k] = left[i];
                i++;
                continue;
            }
        }

        if (j < right.length) {
            newArr[k] = right[j];
            j++;
        }
    }

    return newArr;
}

function swap(arr) {
    const first = arr[0];

    const second = arr[1];

    if (first > second) {
        arr[0] = second;
        arr[1] = first;
    }

    return arr;
}

function slice(arr, start, end) {
    const newArr = [];

    for (let i = 0; i < (end - start); i++) {
        newArr[i] = arr[i + start];
    }

    return newArr;
}

function floor(num) {
    return num / 2 | 0;
}

// DOM Logic...

const createListItem = () => {
    const container = document.querySelector('#numberContainer');
    const newListItem = document.createElement('li', {
        is: 'expanding-list'
    });
    // const listItemTextNode = document.createTextNode(value);
    // newListItem.appendChild(listItemTextNode);
    container.appendChild(newListItem);
};


class Document {
    constructor() {
        this.document = document;
    }

    addNewElement(v, t, c) {
        var e = this.document.createElement(t);
        var x = this.document.createTextNode(v);
        e.appendChild(x);
        Object.keys(c || {}).length ? c.appendChild(e) : this.document.body.appendChild(e);
    }
}
const doc = new Document();

const len = data.length;
for (let i = 0; i < len; i++) {
    // createListItem(data[i]);
    doc.addNewElement(data[i], 'li');
}

// add line break
doc.addNewElement('Sorted List', 'p');

data = mergeSort(data);

for (let i = 0; i < data?.length || 0; i++) {
    // createListItem(data[i]);
    doc.addNewElement(data[i], 'li');
}