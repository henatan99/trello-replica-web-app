import React from "react";

const NewListCardAdd = () => {
    return (
        <div class="newListCard_AddMoreWrapper">
            <span class="material_icons"></span>
            Add another list
        </div>
    )
}

const NewListCardCreateForm = () => {
    return (
        <div>
            <form>
                <input class="newListCard_InputBox" type="text" required="" placeholder="Enter list title..." name="listTitle" />
                <div class="newListCard_ButtonWrapper">
                    <button class="button_buttonwrapper button_primary">
                        <span class="button_label">Add list</span>
                    </button>
                    <span class="material_icons"></span>
                </div>
            </form>
        </div>
    )
}

const NewListCardForm = () => {
    return (
    //   <div class="newListCard_NewListWrapper">
      <div class="newListCard_NewListWrapper newListCard_CreateFormOpen">
        <NewListCardCreateForm />
      </div>
    )
}

export default NewListCardForm;