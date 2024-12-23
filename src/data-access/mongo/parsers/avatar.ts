import { ObjectId } from "mongodb";
import { Avatar, CustomElement } from "../../../model";
import { AvatarMongo, CustomElementMongo } from "../interface";

function parseMongoToCustomElement(customElementMongo: CustomElementMongo): CustomElement {
  return {
    color: customElementMongo.color,
    selectedElementName: customElementMongo.element
  }
}

function parseCustomElementToMongo(customElement: CustomElement): CustomElementMongo {
  return {
    element: customElement.selectedElementName as string,
    color: customElement.color,
  }
}

function parseMongoToAvatar(avatarMongo: AvatarMongo): Avatar {
  return {
    id: avatarMongo._id?.toString(),
    name: avatarMongo.name,

    hat: parseMongoToCustomElement(avatarMongo.hat),
    hair: parseMongoToCustomElement(avatarMongo.hair),
    eyes: parseMongoToCustomElement(avatarMongo.eyes),
    mouth: parseMongoToCustomElement(avatarMongo.mouth),
    clothes: parseMongoToCustomElement(avatarMongo.clothes),
  };
}

function parseAvatarToMongo(avatar: Avatar): AvatarMongo {
  return {
    _id: new ObjectId(avatar.id),
    name: avatar.name,

    hat: parseCustomElementToMongo(avatar.hat as CustomElement),
    hair: parseCustomElementToMongo(avatar.hair as CustomElement),
    eyes: parseCustomElementToMongo(avatar.eyes as CustomElement),
    mouth: parseCustomElementToMongo(avatar.mouth as CustomElement),
    clothes: parseCustomElementToMongo(avatar.clothes as CustomElement),
  }
}

export {
  parseMongoToCustomElement,
  parseCustomElementToMongo,
  parseMongoToAvatar,
  parseAvatarToMongo
}