export default function CustomerHome(){   
    return(
       <>
       <div class="row" style={{marginLeft:'2%',marginTop:'5%'}}>
        <div class="col-md-4" style={{padding:'30px'}}>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">View all Cylinder</h5>
                <a  href="/cylinder/available" role="button" class="btn btn-primary" style={{backgroundColor: '#C68484', border: '1px solid #ccc'}}>Available Cylinder</a>
            </div>
        </div>
    </div>
     <div class="col-md-4" style={{padding:'30px'}}>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">View Booked Cylinders</h5>
                <a href="/booked/cylinders" role="button" class="btn btn-primary" style={{backgroundColor: '#C68484', border: '1px solid #ccc'}}>Booked Cylinder</a>
            </div>
        </div>
    </div>
    <div class="col-md-4" style={{padding:'30px'}}>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">View Profile</h5>
                <a href="/profile"  role="button"class="btn btn-primary" style={{backgroundColor: '#C68484', border: '1px solid #ccc'}}>View profile</a>
            </div>
        </div>
    </div>
    <div class="col-md-4" style={{padding:'30px'}}>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Link Bank account</h5>
                <a href="/bank"  role="button" class="btn btn-primary" style={{backgroundColor: '#C68484', border: '1px solid #ccc'}}>Link Account</a>
            </div>
        </div>
    </div>
    <div class="col-md-4" style={{padding:'30px'}}>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">See transaction</h5>
                <a href="/transaction"  role="button" class="btn btn-primary" style={{backgroundColor: '#C68484', border: '1px solid #ccc'}}>Transaction history</a>
            </div>
        </div>
    </div>
    <div class="col-md-4" style={{padding:'30px'}}>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Logout</h5>
                <a href="/logout"  role="button" class="btn btn-primary" style={{backgroundColor: '#C68484', border: '1px solid #ccc'}}>Logout</a>
            </div>
        </div>
    </div>
</div>
</>
        
    )
};