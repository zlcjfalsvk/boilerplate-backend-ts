resource "aws_ecr_repository" "api" {
  name = "api"
  image_tag_mutability = "MUTABLE"
}
