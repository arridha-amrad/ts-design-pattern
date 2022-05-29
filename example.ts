namespace SingletonExample {
   /**
    *  purpose: ensure a class has only one instance, while providing a global access to this instance
    * characteristics:
    *    - private constructor
    *    - static method to instance the class
    */

   class Database {
      private static instance: Database;

      private constructor() {}

      public static getInstance() {
         if (!Database.instance) {
            Database.instance = new Database();
         }
         return Database.instance;
      }

      public getUser() {
         return [
            { id: 1, name: "ari" },
            { id: 2, name: "dilsah" },
         ];
      }
   }

   const db1 = Database.getInstance();
   const db2 = Database.getInstance();
   console.log(db1 === db2); // true

   console.log(db1.getUser());
}
