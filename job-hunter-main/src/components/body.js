 {/* Here starts code of Search box */}
 <div
 className="search search-lg mb-3 px-5 py-3" 
 aria-label=".form-select-lg example"
>
 <div className="input-group mb-3">
   <span className="input-group-text">
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width={10}
       height={10}
       fill="currentColor"
       className="bi bi-search"
       viewBox="0 0 16 16"
     >
       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
     </svg>
   </span>
   <input
     type="text"
     placeholder="Search for a job"
     className="form-control"
     aria-label="Amount (to the nearest dollar)"
   />
   <span className="input-group-text">
     <button type="button" class="btn btn-success">
       Search
     </button>
   </span>
 </div>
</div>
