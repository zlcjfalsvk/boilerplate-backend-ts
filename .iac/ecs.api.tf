# TODO github action 을 통한 ci/cd 구축 이후 detail 진행

#resource "aws_ecs_cluster" "api_cluster" {
#  name = "api"
#
#  setting {
#    name  = "containerInsights"
#    value = "enabled"
#  }
#}
#
#
## 만약 fargate 가 아닌 ec2 수동 관리를 한다면 aws_ecs_capacity_provider 를 사용 해야 함
## ex) https://spacelift.io/blog/terraform-ecs
#resource "aws_ecs_cluster_capacity_providers" "api_cluster_providers" {
#  cluster_name = aws_ecs_cluster.api_cluster.name
#
#  capacity_providers = ["FARGATE"]
#
#  default_capacity_provider_strategy {
#    base              = 1
#    weight            = 100
#    capacity_provider = "FARGATE"
#  }
#}
#

# TODO
# resource "aws_ecs_service" "api_service" {}

# TODO
# resource "aws_ecs_task_definition" "api_service_task_definition" {}
