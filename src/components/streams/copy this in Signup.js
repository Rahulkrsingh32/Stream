<div> copy this in return of Sighup
<div className="ui container ">
    <form className="ui form">
        <h1 className="ui dividing header">SignUp</h1>
        <div className="field">
            <lable>Name</lable>
            <div className="two fields">
                <div className="field">
                    <input type="text" name="shipping[first-name]" placeholder="First Name" />
                </div>
                <div className="field">
                    <input type="text" name="shipping[last-name]" placeholder="Last Name" />
                </div>
            </div>
        </div>
        <div className="field">
            <lable>Mobile Number</lable>
            <div className="two fields">
                <div className="field">
                    <input type="text" name="shipping[mobile-number1]" placeholder="Mobile Number 1" />
                </div>
                <div className="field">
                    <input type="text" name="shipping[mobile-number2]" placeholder="Mobile Number 2" />
                </div>
            </div>
        </div>

        <div className="eight wide field">
            <lable>Email</lable>
            <input type="email" name="shipping[email]" placeholder="Email" />
        </div>

        <div className="eight wide field">
            <lable>Company Name</lable>
            <input type="text" name="shipping[company-name]" placeholder="Company Name" />
        </div>
        <div className="eight wide field">
            <lable>Present Designation</lable>
            <input type="text" name="shipping[present-designation]" placeholder="Present-designation" />
        </div>
        <div className="eight wide field">
            <lable>Enter new Password</lable>
            <input type="password" name="shipping[password]" placeholder="Enter new Password" />

        </div>
        <div className="eight wide field">
            <lable>Date od Birth</lable>
            <input type="text" name="shipping[date-of-birth]" placeholder="DD/MM/YYYY" />
        </div>
        <div className="eight wide field">
            <lable>Date od Birth</lable>
            <input type="text" name="shipping[date-of-birth]" placeholder="DD/MM/YYYY" />
        </div>
        <div className="eight wide field">
            <lable>Gender</lable>
        
            <select>
                <option value="">Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
            </select>
        
        </div>
        
        <div  className="ui button green massive" tabindex="0">Submit</div>
       
    </form>
    <br />
    <h1 className="or">Or Login with Google <i className="google icon"></i> </h1>
    <GoogleAuth />
    <br />
    <br/>
</div>
<div>
    <Info />
</div>
</div>