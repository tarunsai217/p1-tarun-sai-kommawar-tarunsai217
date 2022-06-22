CREATE TABLE Cities
(
City char(20) PRIMARY KEY,
State char(20)
);


CREATE TABLE Warehouses
(
Wid int,
Wname char(30),
Location_City char(20),
State char(20) ,
FOREIGN KEY (Location_City) REFERENCES Cities(City)
);


CREATE TABLE Stores
(
Sid int PRIMARY KEY,
Store_name char(20),
State char(20),
Location_City char(20),
Wid int ,
FOREIGN KEY (Wid) REFERENCES Warehouses(Wid)
);

CREATE TABLE Customers
(
Cno int PRIMARY KEY,
Cname char(50),
Address varchar(50),
Cu_State char(20),
Cu_City char(20)
);

CREATE TABLE Orders
(
Ono int PRIMARY key,
Odate date,
Cno INT ,
FOREIGN KEY (Cno) REFERENCES Customers(Cno)
);


CREATE TABLE Items
(
ItemNo int PRIMARY KEY,
Description text,
Weight decimal(5,2),
Cost decimal(5,2)
);

CREATE TABLE ItemOrders(
id int,
ItemNo INT,
Ono INT,
FOREIGN KEY (ItemNo) REFERENCES Items(ItemNo),
FOREIGN KEY (Ono) REFERENCES Orders(Ono)
)



CREATE TABLE StoreItems(
id int,
ItemNo INT,
Sid INT,
FOREIGN KEY (ItemNo) REFERENCES Items(ItemNo),
FOREIGN KEY (Sid) REFERENCES Stores(Sid)
)


INSERT INTO Cities VALUES ('Hyderabad', 'Telangana'),('Banglore','Karnataka'),('Chennai','TamilNadu'),('Pune','Maharashtra');
INSERT INTO Warehouses VALUES (1, 'Warehouse1', 'Hyderabad', 'Telangana'),(2, 'Warehouse2', 'Banglore','Karnataka'),(3, 'Warehouse3', 'Chennai','TamilNadu'),(4, 'Warehouse4', 'Pune', 'Maharashtra'),(5, 'Warehouse5', 'Pune', 'Maharashtra');
INSERT INTO Stores VALUES (1, 'Store1', 'Hyderabad', 'Telangana',1),(2, 'Store2', 'Banglore','Karnataka',2),(3, 'Store3', 'Chennai','TamilNadu',3),(4, 'Store4', 'Hyderabad', 'Telangana',1),(5, 'Store5', 'Hyderabad', 'Telangana',1);
INSERT INTO Customers VALUES(1,'Hamid','Address1','Hyderabad', 'Telangana'),(2,'Pavitra','Address2','Banglore','Karnataka'),(3,'Prashanth','Address3','Chennai','TamilNadu'),(4,'Mr.Patil','AddressPatil','Hyderabad', 'Telangana');
INSERT INTO Orders VALUES(1,datetime('now'),1),(2,datetime('now'),2),(3,datetime('now'),3),(4,datetime('now'),4);
INSERT INTO Items VALUES (1, 'Item1', 2.5 ,75.3),(2, 'Item2', 1.5 ,154.45),(3, 'Item3', 5.2 ,554.45);
INSERT INTO StoreItems VALUES(1,1,1),(2,2,2),(3,3,3);
INSERT INTO ItemOrders VALUES(1,1,1),(2,2,2),(3,3,3),(4,1,4),(5,2,4),(6,3,4),(7,2,1),(8,3,1);
