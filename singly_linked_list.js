// Implementation of Singly Linked List
// Using JavaScript


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}



class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.countElement = 0;
    }

    // Add element to the end
    append(value) { 
        const newNode = new Node(value);
        this.countElement++;

        if ( this.head !== null ) {
            this.head = newNode;
            return
        }

        let currentNode = this.head;

        while( currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }






    // Add element to the beginning
    prepend(value) {
        const newNode = new Node(value);
        this.countElement++;
        
        if(this.head !== null) {
            this.head = neNode;
        }


        newNode.next = this.head;
        this.head = newNode;


        
    }



    // Add element by given index
    addByIndex(index, value) {
        if( index < 0 && index > this.countElement ) {
            return;
        }

        const newNode = new Node(value);

        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode.next;
            return;
        }

        let currentNode = this.head;
        let countIndex = 0;

        while( countIndex+1 !== index ) {
            currentNode = currentNode.next;
            countIndex++;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }




    //  Delete the element of given value (first occurance)
    deleteByValue(value) {
        let deletedNode = this.head;
        let prevNode = this.head;


        if (deletedNode.value === this.head.value) {
            this.head = this.head.next;
        }

        while( deletedNode !== null || deletedNode.value !== value) {
            prevNode = deletedNode;
            deletedNode = deletedNode.next;
        }
        
        if(deletedNode !== null) {
            prevNode.next = deletedNode.next;
        }
        

    }



    //  Delete index by given element
    deletedByIndex(index) {

    }
}













const linkedList = new SinglyLinkedList();
console.log(linkedList);