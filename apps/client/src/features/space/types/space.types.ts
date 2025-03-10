import {SpaceCaslAction, SpaceCaslSubject,} from "@/features/space/permissions/permissions.type.ts";
import {SpaceRole} from "@/lib/types.ts";

export interface ISpace {
    id: string;
    name: string;
    description: string;
    icon: string;
    slug: string;
    hostname: string;
    creatorId: string;
    createdAt: Date;
    updatedAt: Date;
    memberCount?: number;
    spaceId?: string;
    membership?: IMembership;
}

interface IMembership {
    userId: string;
    role: SpaceRole;
    permissions?: Permissions;
}

interface Permission {
    action: SpaceCaslAction;
    subject: SpaceCaslSubject;
}

const permissionXample: Permissions = [
    {
        action: SpaceCaslAction.Manage,
        subject: SpaceCaslSubject.Page
    },
    {
        action: SpaceCaslAction.Manage,
        subject: SpaceCaslSubject.Member
    },
]

type Permissions = Permission[];

export interface IAddSpaceMember {
    spaceId: string;
    userIds?: string[];
    groupIds?: string[];
}

export interface IRemoveSpaceMember {
    spaceId: string;
    userId?: string;
    groupId?: string;
}

export interface IChangeSpaceMemberRole {
    spaceId: string;
    userId?: string;
    groupId?: string;
}

// space member
export interface SpaceUserInfo {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
    type: "user";
}

export interface SpaceGroupInfo {
    id: string;
    name: string;
    isDefault: boolean;
    memberCount: number;
    type: "group";
}

export type ISpaceMember = { role: string } & (SpaceUserInfo | SpaceGroupInfo);
