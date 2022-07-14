import React from "react";

const NewListCardAdd = () => {
    return (
        <div className="newListCard_AddMoreWrapper">
            <span className="material_icons"></span>
            Add another list
        </div>
    )
}

const NewListCardCreateForm = () => {
    return (
        <div>
            <form>
                <input className="newListCard_InputBox" type="text" required="" placeholder="Enter list title..." name="listTitle" />
                <div className="newListCard_ButtonWrapper">
                    <button className="button_buttonwrapper button_primary">
                        <span className="button_label">Add list</span>
                    </button>
                    <span className="material_icons"></span>
                </div>
            </form>
        </div>
    )
}

const NewListCardForm = () => {
    return (
    //   <div className="newListCard_NewListWrapper">
      <div className="newListCard_NewListWrapper newListCard_CreateFormOpen">
        <NewListCardCreateForm />
      </div>
    )
}

export default NewListCardForm;