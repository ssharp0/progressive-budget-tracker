let db
// create a new db request for a 'budget' database (persistently store data on user browser)
const request = indexedDB.open('budget', 1)

//  db version
request.onupgradeneeded = ({ target }) => {
 db = target.result
 // create object store called 'pending' and set the autoIncrement to true
 db.createObjectStore('pending', { autoIncrement: true })
}

request.onsuccess = ({ target }) => {
 db = target.result
 // check if the app is online before reading/checking db
 if (navigator.onLine) {
  checkDatabase()
 }
}

// on error log the error code
request.onerror = ({ target }) => { console.log(target.errorCode) }

// function to save the record
const saveRecord = record => {
  // create a transaction on the pending db with readwrite access
 const transaction = db.transaction(['pending'], 'readwrite')
  // access pending object store
 const store = transaction.objectStore('pending')
  // add record to the store
 store.add(record)
}

const checkDatabase = () => {
 // open a transaction on the pending db
 const transaction = db.transaction(['pending'], 'readwrite')
 // access the pending object store
 const store = transaction.objectStore('pending')
 // get all records from the store and set to a variable
 const getAll = store.getAll()

 getAll.onsuccess = () => {
  // if there is more than one record
  if(getAll.result.length > 0) {
   axios.post('/api/transaction/bulk', getAll.result)
    .then(() => {
     // if successful open a transaction on pending db
     const transaction = db.transaction(['pending'], 'readwrite')
     // access pending object store
     const store = transaction.objectStore('pending')
     // clear all items in the store
     store.clear()
    })
  }
 }
}

// window listener for app coming back online
window.addEventListener('online', checkDatabase)