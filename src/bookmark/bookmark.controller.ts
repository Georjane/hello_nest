import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import type { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import type { User } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { BookmarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')

export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) {}
   
    @Get()
    getBookmarks(@GetUser() user: User){
        return this.bookmarkService.getBookmarks(user.id)
    }

    @Post()
    createBookmark(@GetUser() user: User, @Body() dto: BookmarkDto) {
        return this.bookmarkService.createBookMark(user.id, dto);
    }
    
    @Get(':id')
    getBookmarkById(@GetUser() user: User, @Param('id') id: string) {
        return this.bookmarkService.getBookmarkById(user.id, Number(id));
    }

    @Delete(':id')
    deleteBookmark(@GetUser() user: User, @Param('id') id: string) {
        return this.bookmarkService.deleteBookmark(user.id, Number(id));
    }

}
