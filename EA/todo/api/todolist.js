#!/usr/bin/
'use strict'

const readline = require('readline-sync')  // Apply readline-sync framework

var items = [] // var = [], this is an array for the items
var input = '' // var = input the item

do {

    // Add an item to the todo list

    input = String(readline.question('enter command: ')).trim()
      if (input.indexOf('add') === 0) {

        const space = input.indexOf(' ')
        const item = input.substring(space).trim().toLowerCase() // Go to lowercase

        // 1. Check if the item is existed
        
        let existed = false
        for (let i=0; i< items.length; i++) {
            if (items[i] === item) {

        // 2. If existed = true, ignore the item and return message

            existed = true
            console.log(`The item "${item}" is existed.`)
            }
        }

        // 3. If not(!) existed, then add item
        
        if(!existed){
            console.log('adding' + item) // Display adding (item)
            items.push(item) // Add item to items
        }
      } 

      // Remove item from the todo list

      if (input.indexOf('remove ') ===0) {
        const space = input.indexOf(' ')
        const item = input.substring(space).trim()

      // 1. Removing all item from the todo list

        for (let i=0; i<items.length; i++) {
            if (items[i] === item) {
                items.splice(i, 1)
                console.log('removing ' + item)
            }
        }
 
      // 2. Removing one item from the todo list

      for (let i=0; i<items.length; i++) {
        if (items>-1) {
          items.splice(i, 1)
          console.log('removing one item ' + item)
        }
      }

      }

      // List the item from the todo list

      if (input.indexOf('list') ===0) {
        for (let i=0; i<items.length; i++) {
            console.log(`${i}. ${items[i]}`)
        }
      }

} while (input !== 'exit') // If the item is not equal, then exit

