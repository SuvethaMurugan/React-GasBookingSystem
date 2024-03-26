function CylinderFunctionality()
{
    return (
        <>
           <div class="row" style={{marginLeft:'2%',marginTop:'5%'}}>
         <div class="col-md-4" style={{padding:'30px'}}>
         <div class="card">
             <div class="card-body">
                 <h5 class="card-title">Add Cylinders</h5>
                 <a  href="/AddCylinder" role="button" class="btn btn-primary" style={{backgroundColor: '#C68484', border: '1px solid #ccc'}}>Add Cylinders</a>
             </div>
         </div>
     </div>
      <div class="col-md-4" style={{padding:'30px'}}>
         <div class="card">
             <div class="card-body">
                 <h5 class="card-title">Available Cylinder</h5>
                 <a href="/AvailableCylinder" role="button" class="btn btn-primary" style={{backgroundColor: '#C68484', border: '1px solid #ccc'}}>Available Cylinder</a>
             </div>
         </div>
     </div>
     <div class="col-md-4" style={{padding:'30px'}}>
         <div class="card">
             <div class="card-body">
                 <h5 class="card-title">Booked Cylinders</h5>
                 <a href="/BookedCylinder"  role="button"class="btn btn-primary" style={{backgroundColor: '#C68484', border: '1px solid #ccc'}}>Booked Cylinders</a>
             </div>
         </div>
     </div>
     </div>
        </>
    )
 
}
export default CylinderFunctionality;