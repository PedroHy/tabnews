export default interface IComment{
    id: string,
    parent_id: string,
    owner_id: string,
    slug: string,
    title: string,
    body: string,
    status: string,
    source_url: string,
    published_at: string,
    created_at: string,
    updated_at: string,
    deleted_at: null,
    owner_username: string,
    tabcoins: number,
    tabcoins_credit: number,
    tabcoins_debit: number,
    children: [IComment],
    children_deep_count: number
}