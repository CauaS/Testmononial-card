
/**
 * @returns Returns a Container (div)
 */
function createContainer(){
    const divContainer = document.createElement('div');
    divContainer.classList.add('container');
    return divContainer;
}
/**
 * @returns Returns a Card (div)
 */
function createCard(){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    return cardDiv;
}

/**
 * @returns Returns a Card Grid Area (div)
 */
 function createCardGridArea(){
    const cardGridAreaDiv = document.createElement('div');
    cardGridAreaDiv.classList.add('card-grid-container-area');
    return cardGridAreaDiv;
}

/**
 * @returns Returns a Header area content (div)
 */
 function createCardHeaderContentArea(){
    const cardHeaderContentArea = document.createElement('div');
    cardHeaderContentArea.classList.add('header-area', 'flat-header-area');
    return cardHeaderContentArea;
}

/**
 * @returns Returns a picture area content (picture)
 */
 function createPicture(){
    const pictureArea = document.createElement('picture');
    const profileImage = document.createElement('img');
    
    profileImage.setAttribute('src',"./img/profile-thumbnail.png");
    profileImage.setAttribute('alt', 'profile-picture');
    profileImage.setAttribute('class', "card-profile-image");
    pictureArea.appendChild(profileImage);

    return pictureArea;
}

/**
 * @returns Returns a profile information area content (div)
 */
 function createCardProfileInfo(){
    const cardProfileInfoArea = document.createElement('div');
    const profileName = document.createElement('span');
    const profileTag = document.createElement('span');

    profileName.setAttribute('class', 'card-profile-name');
    profileTag.setAttribute('class', 'card-tag');
    profileName.innerText = "Sarah Doe";
    profileTag.innerText = "@sarahdoe";

    cardProfileInfoArea.classList.add('card-profile-info');
    cardProfileInfoArea.appendChild(profileName);
    cardProfileInfoArea.appendChild(profileTag);
    return cardProfileInfoArea;
}

/**
 * @returns Returns a profile content (div)
 */
 function createCardProfileContent(){
    const cardProfileContentArea = document.createElement('div');
    const comment = document.createElement('p');

    comment.setAttribute('class', 'comment-description');
    comment.innerText = "I've been searching for high-quality abstract images for my desgin projects, and I'm thrilled to have found this platform. The variety and depth of creativity are austounding.";

    cardProfileContentArea.classList.add('content-area');
    cardProfileContentArea.appendChild(comment);
    return cardProfileContentArea;
}

/**
 * @returns Binds children to Card Header
 */
function bindAllChildrenToHeaderContent(){
    const headerContent = createCardHeaderContentArea();
    const profilePicture = createPicture();
    const profileInfo = createCardProfileInfo();

    headerContent.appendChild(profilePicture);
    headerContent.appendChild(profileInfo);

    return headerContent;
}

/**
 * @returns Binds children to Card Content
 */
function bindAllChildrenToCardContent(){
    const card = createCard();
    const headerBindingElements = bindAllChildrenToHeaderContent();
    const cardContendArea = createCardProfileContent();

    card.appendChild(headerBindingElements);
    card.appendChild(cardContendArea);

    return card;
}

/**
 * @returns Binds children to Container
 */
function bindAllChildrenToContainer(){
    const container = createContainer();
    const card = bindAllChildrenToCardContent();
    container.appendChild(card);

    document.body.appendChild(container)
}

bindAllChildrenToContainer();