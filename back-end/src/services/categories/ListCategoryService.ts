import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class ListCategoryService {
  async execute() {
    const cateory = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return cateory
  }
}

export { ListCategoryService };
