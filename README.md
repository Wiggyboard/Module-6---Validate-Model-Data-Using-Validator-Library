# Module-6---Validate-Model-Data-Using-Validator-Library

1. Description

This app allows users to perform basic CRUD (Create, Read, Update, Delete) functions on customer data
in a banking database.

2. Instructions for Use

Enter data in JSON format following the customer schema found in the customerModel.js file.

Be sure to fullfil the requirements of each data type according to its respective validator. If your data is
entered incorrectly, the CRUD function will fail and an error message will be displayed.

The requirements are as follows:

	a. Date of birth must be in the past.
	b. Email address must be valid.
	c. Loan amount must be at least $100 but not exceeding $999,999.
	d. In the sub-document address schema, State must be a valid US state.
	e. In the sub-document address schema, Zip code must be exactly 5 digits.
