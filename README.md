- [博客所使用的 Icons](https://icons8.com/icon/pack/free-icons/cute-clipart)
- 包管理器使用 Yarn 2
- 框架：Next

## 备忘

博客使用 Jenkins + docker 部署，Jenkins 运行 docker 前，请检查 Jenkins 用户是否已经添加到 docker 组

步骤：

1. git push
2. GitHub webhook，触发 Jenkins 任务
3. Jenkins 构建和部署应用
   1. yarn：更新依赖
   2. yarn build：构建应用
   3. docker-compose down：停止并删除正在运行的容器
   4. docker-compose up -d --build：重新构建镜像并启动容器
