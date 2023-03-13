**Assumptions**

•	If uploaded file is less than we can wait for validation on file then load to DB.
•	If file size is generally huge taking more time to process, in such condition we can just upload file and we can have background process where we can validate and update in DB. 
•	In this scenario we can separate UI, to get a status of each file process. 
•	Authentication, Authorization, Security need to implement.


**Solution Architecture**

•	Consider monolithic architecture based on scalable we can change it to microservice architecture.
•	Splitted into routing, controller and services. 
•	All common code moved to Utils. 
•	Split the code as small as possible and follow single responsibility for each module/file.
•	We can cluster our services to scale up on demand. 


**Design Decision** 

•	Consider Express for Restful APIs as we have large number of user.
•	All uploaded file for further review we can store in s3 or local, if not required then we can do clean up on regular basis.

•	As per the current data we can go both for relational or non-relational. But as application grows relational will be more suited as most of the data are structured.

•	Need to implement indexing properly.

•	Considered React for front end. 
•	Used Antd as CSS framework.
•	Redux might need to implement in future as application become more complex. 

![image](https://user-images.githubusercontent.com/17910738/224832080-208badec-46ca-4cc6-a243-0cb65ac822c5.png)
