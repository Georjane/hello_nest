import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookmarkDto } from './dto';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService) {}

    async createBookMark(userId: number, dto: BookmarkDto) {
    try {
      return await this.prisma.bookmark.create({
        data: {
          title: dto.title,
          description: dto.description,
          link: dto.link,
          userId,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('You already have a bookmark with this title');
        }
      }
      throw error;
    }
  }

    getBookmarks(userId: number) {
        return this.prisma.bookmark.findMany({
        where: { userId },
        });
    }

    getBookmarkById(userId: number, bookmarkId: number) {
        return this.prisma.bookmark.findFirst({
        where: {
            id: bookmarkId,
            userId,
        },
        });
    }

    deleteBookmark(userId: number, bookmarkId: number) {
        return this.prisma.bookmark.deleteMany({
        where: {
            id: bookmarkId,
            userId,
        },
        });
    }
}
