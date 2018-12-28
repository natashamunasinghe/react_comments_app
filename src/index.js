import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

//example of showing 1 component within another
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="Sam"
                date="12th June"
                text="Nice blog!"
                avatar={faker.image.avatar()}
                />
           </ApprovalCard>

           <ApprovalCard>
                <CommentDetail 
                author="Jane"
                date="14th Feb"
                text="Lost interest!"
                avatar={faker.image.avatar()}

                />  
           </ApprovalCard>

           <ApprovalCard>
                <CommentDetail 
                author="Alex"
                date="1st Dec"
                text="Learnt lots - thanks"
                avatar={faker.image.avatar()}

                />
           </ApprovalCard>     
        </div>
    );       
};

ReactDOM.render(
<App />,
document.getElementById("root")
);