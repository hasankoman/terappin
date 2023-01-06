import React from "react";

export default function CompletedTest() {
  return (
    <>
      <div className="container test-body fs-5 d-flex flex-column gap-4 completed-test">
        <div>
          <img
            src="https://images.unsplash.com/photo-1617289755070-3590b660a06e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80"
            alt=""
            style={{ width: 100 + "%", height: 450 + "px", objectFit: "cover" }}
          />
        </div>
        <div className="fw-bold fs-2">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            error alias officiis impedit, velit iste molestiae nisi, ducimus
            quia vero asperiores. Deleniti incidunt perferendis iure facilis
            labore itaque autem repudiandae odio error aspernatur quae optio
            vero nesciunt enim dolorem quam id, reprehenderit facere maiores
            mollitia maxime nisi temporibus nostrum. Ducimus corporis recusandae
            voluptatem! Cumque natus ex, ad, quisquam veniam sequi eveniet a
            laboriosam voluptatibus tempore temporibus neque? Obcaecati vitae
            soluta eos maiores, necessitatibus voluptatibus fuga?
          </p>
        </div>
        <button className="d-inline-block welcome-button py-2 px-4 rounded-3 mt-3 mb-5">
          Testi Bitir
        </button>
        {/* <div className="progress">
          <div
            class="progress-bar"
            style={{ width: 25 + "%", height: 200 + "px" }}
          ></div>
        </div> */}
      </div>
    </>
  );
}
