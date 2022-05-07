import React from 'react';

const Categories = () => {
    return (
        <div class="container  mx-auto text-center mt-5">
            <h3 className="text-center mt-5">Cate<span className="text-danger fw-bold">g</span>ories</h3>
      <div class="row  d-flex justify-content-center mt-5">
        <div class="col-md-4 me-5  border border-light shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex justify-content-between align-items-center ">
            <h5>Pre Workout</h5>
            <img style={{ width: '30%' }} src="https://bdmuscle.com/category_images/pre-workout-a.webP" alt=""/>
          </div>
        </div>
        <div class="col-md-4   shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex justify-content-between align-items-center ">
            <h5>Mass Gainer</h5>
            <img style={{ width: '30%' }} src="https://bdmuscle.com/category_images/mass-gainer-o.webP" alt=""/>
          </div>
        </div>
        <div class="col-md-4 me-5 shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex justify-content-between align-items-center">
            <h5>Whey</h5>
            <img style={{ width: '30%' }} src="https://bdmuscle.com/category_images/whey-protein-J.webP" alt=""/>
          </div>
        </div> 
        <div class="col-md-4 me-1 shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex justify-content-between align-items-center">
            <h5>Fat Burner</h5>
            <img style={{ width: '30%' }} src="https://bdmuscle.com/category_images/fat-burner-J.webP" alt=""/>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Categories;