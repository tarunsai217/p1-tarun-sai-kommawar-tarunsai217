//1}Find the item that has minimum weight
SELECT *FROM Items WHERE weight=(SELECT MIN(Weight) AS MinimumWeight FROM Items);


//2}Find the different warehouses in “Pune
SELECT * FROM Warehouses WHERE location_city='Pune';

//3}Find the details of items ordered by a customer “Mr.Patil"
SELECT * FROM Items WHERE ItemNo =(SELECT itemNo FROM ItemOrders WHERE Ono=(SELECT Ono FROM Orders WHERE Cno=(SELECT Cno FROM Customers where cname='Mr.Patil')))

//4}Find a Warehouse which has maximum stores.
SELECT
  wid,
  COUNT(wid) AS `value_occurrence` 
FROM
  Stores
GROUP BY 
 wid
ORDER BY 
  `value_occurrence` DESC
LIMIT 1;

//5}Find an item which is ordered for a minimum number of times
SELECT
  ItemNo,
  COUNT(ItemNo) AS `value_occurrence` 
FROM
  ItemOrders
GROUP BY 
 ItemNo
ORDER BY 
  `value_occurrence` ASC
LIMIT 1;


//6}Find the detailed orders given by each customer.
SELECT * from Customers 
JOIN Orders 
ON Customers.Cno=Orders.Cno
left JOIN ItemOrders
On Orders.ono=ItemOrders.Ono
JOIN Items
ON Items.ItemNo=ItemOrders.ItemNo

